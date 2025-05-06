import { useState } from 'react';
import { databases, appwriteConfig } from '@/lib/appwrite/config';
import { Query, Models } from 'appwrite';

interface Hospital {
  $id: string;
  name: string;
  location: string;
  budget: number;
  rating: number;
  specialties: string[];
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

      // Add filters to queries
      if (filters.location) {
        // Use equal for exact location match
        queries.push(Query.equal('location', filters.location));
      }
      
      if (filters.budget) {
        queries.push(Query.lessThanEqual('consultationFee', filters.budget));
      }
      
      if (filters.category) {
        // Use equal for array field
        queries.push(Query.equal('specialties', filters.category));
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
        specialties: Array.isArray(doc.specialties) ? doc.specialties : [],
        consultationFee: Number(doc.consultationFee) || 0,
        imageUrl: doc.imageUrl || '',
        isOpen: Boolean(doc.isOpen),
        distance: Number(doc.distance) || 0
      }));

      setHospitals(hospitalData);
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