import { API_URL } from "../config/config";
import axios from 'axios';
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

export const deleteApi = async(id: any, token:any) => {
        if (!token) return;

        try {
            const result = await Swal.fire({
                title: "Do you want to delete this item?",
                showCancelButton: true,
                confirmButtonText: "Continue",
            });
    
            if (result.isConfirmed) {
                const url_api = `${API_URL.main}/${id}`;
                await axios.delete(url_api, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                Swal.fire("Deleted!", "Your item has been deleted.", "success");
              
            }
        } catch (error) {
            console.error("Error deleting data:", error);
            Swal.fire("Error", "Failed to delete the data", "error");
         
        }
};
