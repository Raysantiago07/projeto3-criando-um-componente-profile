import Profile from './components/Profile'

export default function App(){
  return(
    <div>
      <Profile 
        avatar={'../../public/avatar.jpg'}
        name={'Ray Santiago'}
        bio={'Atleta/Estudante'}
        email={'santiagoray@gmail.com'}
        phone={'+55 85 99276-6743'}
        githubUrl={'https://github.com/Raysantiago07'}
        instagramUrl={'https://instagram.com/raysantiago._'}
        linkedinUrl={'https://www.linkedin.com/in/jrsantiagoo/'}
      />
    </div>
  )
}