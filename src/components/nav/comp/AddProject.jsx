"use client"
import Container from '@/components/Container'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { postAddProject } from '@/fetch/project.api'
import building from '@/assets/building.jpg'
import { RiImageAddLine } from "react-icons/ri"

export default function AddProject({ setAddProject }) {
  const [formData, setFormData] = useState({
    projectType: '',
    projectImage: null,
    city: '',
    state: ''
  })
  const [pass, setPass] = useState('')

  const [frontendImage, setFrontendImage] = useState(building)
  const [loading, setLoading] = useState(false)
  const projImagRef = useRef()
  const [confirm, setConfirm] = useState(false)
  const [mess, setMess] = useState('')
  const [visible, setVisible] = useState(false)

  const handleChange = (e) => {
    const { name, value, files } = e.target

    if (files && files[0]) {
      const preview = URL.createObjectURL(files[0])
      setFrontendImage(preview)
    }

    setFormData(prev => ({
      ...prev,
      [name]: files && files[0] ? files[0] : value
    }))
  }

  const validateForm = () => {
    if (!formData.projectType) return alert("Select project type")
    if (!formData.projectImage) return alert("Upload image")
    if (!formData.city.trim()) return alert("City required")
    if (!formData.state.trim()) return alert("State required")
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setLoading(true)

    try {
      const submitData = new FormData()
      Object.entries(formData).forEach(([k, v]) => submitData.append(k, v))

      const res = await postAddProject(submitData)

      if (res) {
        setMess(res.message)
        setConfirm(true)
        reset()
      }
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }
  const reset = () => {
    setFormData({
      projectType: '',
      projectImage: null,
      city: '',
      state: ''
    })
    setFrontendImage(building)
    projImagRef.current.value = null
  }

  useEffect(() => {
    return () => {
      if (frontendImage) URL.revokeObjectURL(frontendImage)
    }
  }, [frontendImage])

  const handleClick = (e) => {
    const option = e.target.innerText
    setConfirm(false)
    if (option !== 'Add More') setAddProject(false)
  }

  const checkPass = async (password) => {
    if (password === 'ram@123') {
      setVisible(true)
    }
  }
  const handlePass = (e)=>{
    const {value} = e.target
    setPass(value)
    checkPass(value)

  }

  return (

    <Container className="fixed inset-0 z-50 flex items-center justify-center">

      {/* overlay */}
      <div
        onClick={() => setAddProject(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs"
      />

      {/* confirm popup */}
      {confirm && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-2xl px-2 py-6 text-center space-y-4 w-[250px]">
            <p className="text-lg w-full font-semibold">{mess}</p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={handleClick}
                className="bg-green-600 hover:scale-105 transition-all cursor-pointer duration-300 text-white px-4 py-2 rounded-lg"
              >
                Add More
              </button>
              <button
                onClick={handleClick}
                className="bg-red-600 hover:scale-105 transition-all cursor-pointer duration-300 text-white px-4 py-2 rounded-lg"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* modal */}
      {
        visible
          ?
          <div className="relative z-40 bg-white w-[95vw] md:w-[50vw] lg:w-[40vw]  h-[80vh] md:h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">

            {/* image preview */}
            <Container className="relative h-[45%] justify-center mx-auto mt-5 w-[80%] border-b group">
              <Image
                src={frontendImage}
                alt="Preview"
                width={2000}
                height={2000}
                className="object-cover h-full w-full "
              />
              <button
                type="button"
                onClick={() => projImagRef.current.click()}
                className="absolute bottom-4 right-4 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition"
              >
                <RiImageAddLine className="text-2xl text-gray-700" />
              </button>
            </Container>

            {/* form */}
            <form
              onSubmit={handleSubmit}
              className="flex-1 overflow-y-auto space-y-5 p-6"
            >


              {/* project type */}
              <div className="grid grid-cols-1 items-center md:grid-cols-4 gap-3">
                <h2 className="text-md font-semibold text-gray-800">
                  Project-type:-
                </h2>
                {["Architectural", "Civil Construction", "Interior"].map(type => (
                  <label
                    key={type}
                    className={`p-3 border rounded-lg cursor-pointer text-center font-medium transition
                ${formData.projectType === type
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300 hover:border-blue-400"
                      }`}
                  >
                    <input
                      type="radio"
                      name="projectType"
                      value={type}
                      checked={formData.projectType === type}
                      onChange={handleChange}
                      className="hidden"
                    />
                    {type}
                  </label>
                ))}
              </div>

              <input
                type="file"
                name="projectImage"
                accept="image/*"
                onChange={handleChange}
                ref={projImagRef}
                className="hidden"
              />

              {/* city + state */}
              <div className="flex gap-3">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-gray-100 focus:bg-white border rounded-lg p-3 outline-none"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full bg-gray-100 focus:bg-white border rounded-lg p-3 outline-none"
                />
              </div>

              <Container className='w-full'>
                <button
                  type='reset'
                  onClick={reset}
                  className="w-full bg-red-600 cursor-pointer hover:scale-102 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="w-full bg-blue-600 cursor-pointer hover:scale-102 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300"
                >
                  {loading ? "Please wait..." : "Submit Project"}
                </button>
              </Container>
            </form>
          </div>
          :
          <Container className={'bg-white z-40 justify-center rounded-lg w-[300px] h-[150px]'}>
            <form action="">
              <input
                className='w-full bg-gray-100 focus:bg-white border rounded-lg p-3 outline-none'
                value={pass}
                onChange={handlePass}
                type="password" 
                placeholder='Enter Password'
              />
            </form>
          </Container>
      }
    </Container>
  )
}
