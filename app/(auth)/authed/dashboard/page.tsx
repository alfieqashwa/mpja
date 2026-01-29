import { DashboardHeader } from "../_components/dashboard-header"
import { DashboardTitle } from "../_components/dashboard-title"

export default function DashboardPage() {
  return (
    <div>
      <DashboardHeader title="dashboard" />
      <div className="px-6 py-7">
        <DashboardTitle
          title="Welcome back, Daenar"
          subTitle="Pick up where you left off—your progress is saved automatically."
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ad, ex dolorum fugit modi ducimus molestias pariatur, exercitationem
          similique qui quibusdam a molestiae sint. Hic amet quia ut id eius?
        </p>
      </div>
    </div>
  )
}
