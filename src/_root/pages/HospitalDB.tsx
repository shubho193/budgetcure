import React, { useState } from "react";
import Papa from 'papaparse';
import { Client, Databases, ID } from "appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";

const client = new Client()
  .setEndpoint(appwriteConfig.url) 
  .setProject(appwriteConfig.projectId);

const databases = new Databases(client);
const databaseId = appwriteConfig.databaseId;
const collectionId = appwriteConfig.hospitalsID;

const HospitalUploader = () => {
  const [uploadStatus, setUploadStatus] = useState("");

  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        let rows = results.data as { [key: string]: string }[];

        // Convert specific fields to appropriate types
        rows = rows.map((row) => ({
          ...row,
          budget: parseInt(row.budget, 10),
          rating: parseFloat(row.rating), // ensure it's an integer
        }));

        try {
          await Promise.all(
            rows.map((row) =>
              databases.createDocument(
                databaseId,
                collectionId,
                ID.unique(),
                row
              )
            )
          );
          setUploadStatus("✅ Upload successful!");
        } catch (error) {
          console.error("❌ Error uploading:", error);
          setUploadStatus("❌ Upload failed. Check console.");
        }
      },
    });
  };

  return (
    <div className="p-4">
      <input type="file" accept=".csv" onChange={handleCSVUpload} />
      <p className="mt-2">{uploadStatus}</p>
    </div>
  );
};

export default HospitalUploader;
