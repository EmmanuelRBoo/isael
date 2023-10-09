interface IRoot {
    children: React.ReactNode | React.ReactNode[]
}

export default function DashLayout({ children }: IRoot) {
    return (
        <>
            {children}
        </>
    )
}
