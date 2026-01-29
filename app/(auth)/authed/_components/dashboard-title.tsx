export const DashboardTitle = ({
  title,
  subTitle,
}: {
  title: string
  subTitle: string
}) => (
  <article className="space-y-2 pb-6">
    <h2 className="font-bold text-primary text-2xl">{title}</h2>
    <p className="font-medium text-secondary">{subTitle}</p>
  </article>
)
