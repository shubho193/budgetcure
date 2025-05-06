import { useState } from 'react';
import { databases, appwriteConfig } from '@/lib/appwrite/config';
import { Query, Models } from 'appwrite';

interface Hospital {
  $id: string;
  name: string;
  location: string;
  budget: number;
  rating: number;
  Specialities: string;  // Comma-separated string
  consultationFee: number;
  imageUrl: string;
  isOpen: boolean;
  distance: number;
}

interface SearchFilters {
  location?: string;
  budget?: number;
  category?: string;
  rating?: number;
  filters?: {
    nearbyArea: boolean;
    withinBudget: boolean;
    specifiedCategories: boolean;
  };
}

export const useHospitalSearch = () => {
  const [loading, setLoading] = useState(false);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [error, setError] = useState<string | null>(null);

  const searchHospitals = async (filters: SearchFilters) => {
    setLoading(true);
    setError(null);
    
    try {
      let queries: string[] = [];

      // Add filters to queries only if their respective filter options are enabled
      if (filters.location && filters.filters?.nearbyArea) {
        queries.push(Query.equal('location', filters.location));
      }
      
      if (filters.budget && filters.filters?.withinBudget) {
        queries.push(Query.lessThanEqual('budget', filters.budget));
      }
      
      if (filters.rating) {
        queries.push(Query.greaterThanEqual('rating', filters.rating));
      }

      const response = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.hospitalsID,
        queries
      );

      // Convert Appwrite Documents to Hospital type
      const hospitalData = response.documents.map((doc: Models.Document) => ({
        $id: doc.$id,
        name: doc.name || '',
        location: doc.location || '',
        budget: Number(doc.budget) || 0,
        rating: Number(doc.rating) || 0,
        Specialities: String(doc.Specialities || ''),
        consultationFee: Number(doc.consultationFee) || 0,
        imageUrl: doc.imageUrl || '',
        isOpen: Boolean(doc.isOpen),
        distance: Number(doc.distance) || 0
      }));

      // Apply additional filters
      let filteredHospitals = hospitalData;

      // Filter by category if specified and the filter is enabled
      if (filters.category && filters.filters?.specifiedCategories) {
        filteredHospitals = filteredHospitals.filter(hospital => {
          const specialties = hospital.Specialities.split(',').map(s => s.trim().toLowerCase());
          return specialties.includes(filters.category!.toLowerCase());
        });
      }

      setHospitals(filteredHospitals);
    } catch (err) {
      setError('Failed to fetch hospitals. Please try again.');
      console.error('Error searching hospitals:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    searchHospitals,
    hospitals,
    loading,
    error
  };
}; 