import HeaderBox from "@/components/HeaderBox";import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
    const loggedIn = {firstName:'Elva', lastName:'W', email:"eval.slsl@gmail.com"}
    const accounts = {totalBanks: 1, totalCurrentBalance:143, data: []}
    const accountsData = accounts.data

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
