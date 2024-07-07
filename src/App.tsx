import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, PostProps } from './components/Post'

import './global.css';

import styles from './App.module.css'

const posts: (PostProps & { id: number })[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/pedrosasso1.png',
      name: 'Pedro Sasso',
      role: 'Software Engineer @Offerwise'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-07-06 11:18:30'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/OtavioasCosta.png',
      name: 'Otavio Costa',
      role: 'Frontend Developer @Offerwise'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-07-06 15:18:30'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/marcellasasso.png',
      name: 'Marcella Sasso',
      role: 'Frontend Developer @Offerwise'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-07-06 17:18:30'),
  },
]

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt} 
              />
            ))}
        </main>
      </div>
   </div>
  )
}



