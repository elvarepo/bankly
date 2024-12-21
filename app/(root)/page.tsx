import HeaderBox from "@/components/HeaderBox";


const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
    const loggedIn = {firstName:'Elva'};


  return (
    <section className="home">
      <div className="home-content">         
        <header className="home-header">
        <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

        </header>
    </div>
    </section>
  )
}

export default Home
