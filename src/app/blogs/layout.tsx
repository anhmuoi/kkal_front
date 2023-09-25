


export const metadata = {
    title: 'Blog Lists',
    description: 'blog list',
}

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}
