import React from 'react'

export default [
  { name: 'home', link: '/home', C: React.lazy(async () => import('@/view/home')) },
  { name: 'chat', link: '/chat', C: React.lazy(() => import('@/view/chat')) },
  { name: 'prompt', link: '/prompt', C: React.lazy(() => import('@/view/prompt')) }
]
