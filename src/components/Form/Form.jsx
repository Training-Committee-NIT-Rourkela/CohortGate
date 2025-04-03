import React, { useState,useRef,useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaSpinner } from "react-icons/fa";

const TECHNOLOGIES = [
  "AI/ML", "Blockchain", "IoT", "Cybersecurity", "Cloud Computing","Data Science", "Big Data", "DevOps", "Mobile Development", "Web Development"
];

const SECTORS = [
  "Healthcare", "Finance", "Education", "Retail", "Manufacturing", "Technology", "Energy", "Transportation", "Government", "E-commerce",  "Telecommunications", "Media & Entertainment", "Hospitality & Tourism", "Aerospace & Defense", "Supply Chain & Logistics", "Real Estate & Construction", "Environmental & Sustainability", "Food & Beverage", "Other"
];

const schema = z.object({
  companyName: z.string().min(1, "Company Name is required"),
  website: z.string().url("Invalid URL"),
  email: z.string().email("Invalid Email"),
  repName: z.string().min(1, "Representative Name is required"),
  contact: z.string().min(10, "Contact Number is required"),
  sector: z.string().min(1, "Please select a sector"),
  otherSector: z.string().optional(),
  problemStatement: z.string().min(1, "Please describe your problem statement"),
  brochure: z.any()
    .refine((file) => file?.length > 0, "Please upload a PDF file")
    .refine((file) => file?.[0]?.type === "application/pdf", "Only PDF files are allowed"),
  technologies: z.array(z.string()).optional()
});

const Form = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedSector, setSelectedSector] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const successRef = useRef(null); 

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch
  } = useForm({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (successMessage && successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [successMessage]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file?.name || "");
    setUploadProgress(0);
    setValue("brochure", e.target.files);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSuccessMessage("");
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        const newProgress = prev + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("Form Submitted:", data);
    setIsSubmitting(false);
    setSuccessMessage("Form submitted successfully!");
    reset();
    setFileName("");
  };

  const inputClass = "w-full p-2 border rounded-lg shadow-md shadow-gray-300 dark:shadow-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none";
  const labelClass = "block text-gray-700 dark:text-gray-300 mb-1";
  const errorClass = "text-red-500 text-sm";

  return (
    <div className="max-w-3xl mx-auto rounded-lg p-8 mt-32 mb-20 bg-white dark:bg-gray-900 dark:text-white shadow-[0px_-5px_10px_rgba(0,0,0,0.1),0px_5px_10px_rgba(0,0,0,0.1)]">

      <h2 className="text-2xl font-bold mb-6 text-center">Company Onboarding Form</h2>
      
      {successMessage && ( 
        <p ref={successRef} className="text-green-600 font-semibold text-center mb-4">{successMessage}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Company Details */}
        <div>
          <label className={labelClass}>Company Name</label>
          <input type="text" {...register("companyName")} className={inputClass} />
          {errors.companyName && <p className={errorClass}>{errors.companyName.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Company Website</label>
          <input type="url" {...register("website")} className={inputClass} />
          {errors.website && <p className={errorClass}>{errors.website.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Company Email</label>
          <input type="email" {...register("email")} className={inputClass} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        {/* Representative Details */}
        <div>
          <label className={labelClass}>Representative Name</label>
          <input type="text" {...register("repName")} className={inputClass} />
          {errors.repName && <p className={errorClass}>{errors.repName.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Contact Number</label>
          <input type="tel" {...register("contact")} className={inputClass} />
          {errors.contact && <p className={errorClass}>{errors.contact.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Sector/Domain</label>
          <select 
            {...register("sector")} 
            className={inputClass} 
            onChange={(e) => setSelectedSector(e.target.value)}
          >
            <option value="">Select a sector</option>
            {SECTORS.map((sector) => (
              <option key={sector} value={sector}>{sector}</option>
            ))}
          </select>
          {errors.sector && <p className={errorClass}>{errors.sector.message}</p>}
        </div>

        {selectedSector === "Other" && (
          <div>
            <label className={labelClass}>Specify Other Sector</label>
            <input type="text" {...register("otherSector")} className={inputClass} />
          </div>
        )}

        {/* Technological Preference */}
        <div>
          <label className={labelClass}>Technological Preference</label>
          <div className="grid grid-cols-2 gap-2">
            {TECHNOLOGIES.map((tech) => (
              <label key={tech} className="flex items-center space-x-2 dark:text-gray-300">
                <input type="checkbox" value={tech} {...register("technologies")} className="dark:bg-gray-800" />
                <span>{tech}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Problem Statement */}
        <div>
          <label className={labelClass}>Problem Statement</label>
          <textarea {...register("problemStatement")} className={inputClass} rows={5} />
          {errors.problemStatement && <p className={errorClass}>{errors.problemStatement.message}</p>}
        </div>

        {/* File Upload with Progress Bar */}
        <div>
          <label className={labelClass}>Upload Company Brochure (PDF)</label>
          <input 
            type="file" 
            accept="application/pdf"
            className={inputClass}
            onChange={handleFileChange}
          />
          {fileName && (
            <p className="text-sm text-gray-500 mt-1">Selected: {fileName}</p>
          )}
          {errors.brochure && <p className={errorClass}>{errors.brochure.message}</p>}
          
          {/* Progress Bar */}
          {isSubmitting && (
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          )}
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting} 
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="animate-spin mr-2" />
              Uploading ({uploadProgress}%)
            </>
          ) : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;