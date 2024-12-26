import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
    const loggedIn = await getLoggedInUser()
    const accounts = {totalBanks: 1, totalCurrentBalance:143, data: []}
    const accountsData = accounts.data

  return (
    <section className="home">
      <div className="home-content">         
        <header className="home-header">
        <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={143}
            // accounts={accountsData}
            // totalBanks={accounts?.totalBanks}
            // totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>

        RECET TRANSACTIONS
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:123.50},{currentBalance:500.50}]}
        // user={loggedIn}
        // transactions={account?.transactions}
        // banks={accountsData?.slice(0, 2)}
      />
    </section>
  )
}

export default Home
