import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import WriteArticles from './pages/WriteArticles'
import BlogTitles from './pages/BlogTitles'
import RemoveBackground from './pages/RemoveBackground'
import RemoveObject from './pages/RemoveObject'
import GenerateImages from './pages/GenerateImages'
import ReviewResume from './pages/ReviewResume'
import Layout from './pages/Layout' 
import Community from './pages/Community'
import { useAuth } from '@clerk/clerk-react'
import {Toaster} from 'react-hot-toast'
const App = () => {
  
  
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/ai' element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='write-article' element={<WriteArticles/>}/>
        <Route path='blog-titles' element={<BlogTitles/>}/>
        <Route path='remove-background' element={<RemoveBackground/>}/>
        <Route path='remove-object' element={<RemoveObject/>}/>
        <Route path='generate-images' element={<GenerateImages/>}/>
        <Route path='review-resume' element={<ReviewResume/>}/>
        <Route path='community' element={<Community/>}/>
        

        </Route>
      </Routes>
    </div>
  )
}

export default App
