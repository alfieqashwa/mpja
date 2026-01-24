
export const SectionTitle = ({title}: {title: string}) =>   (
    <p className="text-[#E11D48] font-bold uppercase tracking-wide text-lg">
        {title}
    </p>
    )

export const SectionTitle2 = ({title}: {title: string}) =>   (
    <h2 className="text-6xl mt-6 font-bold sm:text-4xl text-primary">
        {title}
    </h2>
)


export const SectionDescription = ({description}: {description: string}) =>   (
    <p className="max-w-2xl mt-6 mx-auto font-semibold text-2xl text-secondary">
        {description}
    </p>
)