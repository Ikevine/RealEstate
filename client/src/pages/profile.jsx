import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { app } from '../firebase'

export default function Profile() {

  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined)
  // Handle the progress
  const [filePer, setFilePer] = useState(0);
  const [FileError, setFileError] = useState(false)
  const {currentUser} = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if(file){
      handleFileUpload(file);
    }
  
  }, [file]);
  
  const handleFileUpload =  (file) => {
    const storage = getStorage(app);
    const filename = new Date().getTime() + file.name;
    const storageRef = ref(storage, filename);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
    (snapshot) =>{
      const progress = (snapshot.bytesTransferred / 
        snapshot.totalBytes) * 100;
        setFilePer(Math.round(progress));
        
    },
      (error) =>{
         setFileError(true);
      },
      ()=>{
        getDownloadURL(uploadTask.snapshot.ref)
        .then((downloadURL) => setFormData({...formData, avatar: downloadURL})
        )
      },
    ); 
  }
  return (
    <section className='w-full flex flex-col items-center justify-center gap-8 p-4'>
      <h1 className='text-4xl font-bold text-slate-800'>Profile</h1>

      <form className='w-[64%] flex flex-col gap-4 items-center'>
            <input type="file" ref={fileRef} onChange={(e)=>setFile(e.target.files[0])} hidden accept='image/*'/>
            <img onClick={()=> fileRef.current.click()} className='w-24 h-24 rounded-full cursor-pointer' src={formData.avatar || currentUser.avatar} alt='Profile image'/> 
            <p>
              {FileError? (<span>Error image Upload must be less than 2mb</span> ): filePer> 0 && filePer <100 ?
               (<span>{`Uploading ${filePer}%`}</span>)
               : filePer === 100 ?(<span className='text-green-900'>Image successful Uploaded</span>): ""
             }
          </p>
            <input

              type="text"
              placeholder="name"
              id='name'
              className='w-full p-4 bg-slate-50 focus:outline-none'
            />
            <input

              type="text"
              placeholder="email"
              id='email'
              className='w-full p-4 bg-slate-50 focus:outline-none'
            />
            <input
              type="password"
              placeholder="password"
              id='password'
              className='w-full p-4 bg-slate-50 focus:outline-none'
            />
            {/* button */}
              <button className='bg-slate-900 text-white p-3 rounded-lg w-full hover:opacity-95'> Update</button>
              <button className='bg-green-900 text-white p-3 rounded-lg w-full hover:opacity-95'> Create Listing</button>
        </form>
        <div className="flex justify-between items-center w-full px-16">
           <p className='text-red-600 font-medium cursor-pointer'>Delete Account</p>
           <p className='text-red-600 font-medium cursor-pointer'>Sign out</p>
        </div>
        <p className='font-medium text-slate-800 cursor-pointer'>Show listing</p>
    </section>
  )
}
