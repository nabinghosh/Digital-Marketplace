export default function LandingPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="h-full">
            <body className={['relative h-full'].join(' ')}>
                <main className="relative flex flex-col min-h-screen">
                    <div className="flex-grow flex-1 overflow-hidden">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
