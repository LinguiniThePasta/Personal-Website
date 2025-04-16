import Image from "next/image"
import {Github, Mail, Linkedin, ExternalLink, Code, Database, Server} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Card, CardContent} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/gradient-bg.jpeg"
                        alt="Background gradient"
                        fill
                        priority
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
                </div>

                <div className="container relative z-10 pt-24 pb-20 md:pt-32 md:pb-28">
                    <div className="flex flex-col items-start max-w-3xl">
                        <Badge variant="outline" className="mb-4 text-sm font-medium">
                            Backend Developer
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            <span className="block font-extrabold">Lingyu Li</span>
                            <span className="block text-muted-foreground mt-2 text-2xl md:text-3xl">Building fun things for fun</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                            CS student at Purdue specializing in backend development, but also likes to dabble in
                            frontend and Machine Learning
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg">
                                <Mail className="mr-2 h-4 w-4"/> Contact Me
                            </Button>
                            <Button variant="outline" size="lg">
                                View Resume
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-muted/50">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">About Me</h2>
                            <p className="text-muted-foreground mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore
                            </p>
                            <p className="text-muted-foreground mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore
                            </p>
                            <div className="flex gap-4">
                                <Button variant="ghost" size="icon" asChild>
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                        <Github className="h-5 w-5"/>
                                        <span className="sr-only">GitHub</span>
                                    </a>
                                </Button>
                                <Button variant="ghost" size="icon" asChild>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="h-5 w-5"/>
                                        <span className="sr-only">LinkedIn</span>
                                    </a>
                                </Button>
                                <Button variant="ghost" size="icon" asChild>
                                    <a href="mailto:your.email@example.com">
                                        <Mail className="h-5 w-5"/>
                                        <span className="sr-only">Email</span>
                                    </a>
                                </Button>
                            </div>
                        </div>
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image src="/images/code-bg.jpeg" alt="Developer workspace" fill className="object-cover"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-12 text-center">My Expertise</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border-none shadow-lg">
                            <CardContent className="pt-6">
                                <div
                                    className="mb-4 p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Server className="h-6 w-6 text-primary"/>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Backend Development</h3>
                                <p className="text-muted-foreground mb-4">
                                    Building scalable and maintainable server-side applications with modern
                                    technologies.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary">Django</Badge>
                                    <Badge variant="secondary">SpringBoot</Badge>
                                    <Badge variant="secondary">NodeJS</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg">
                            <CardContent className="pt-6">
                                <div
                                    className="mb-4 p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Database className="h-6 w-6 text-primary"/>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Database & Infrastructure</h3>
                                <p className="text-muted-foreground mb-4">
                                    Designing efficient database schemas and managing cloud infrastructure.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary">PostgreSQL/MySQL</Badge>
                                    <Badge variant="secondary">MongoDB</Badge>
                                    <Badge variant="secondary">Neo4J</Badge>
                                    <Badge variant="secondary">AWS</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg">
                            <CardContent className="pt-6">
                                <div
                                    className="mb-4 p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
                                <p className="text-muted-foreground mb-4">
                                    Creating responsive and intuitive user interfaces with modern frameworks.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary">React</Badge>
                                    <Badge variant="secondary">Next.js</Badge>
                                    <Badge variant="secondary">TypeScript/JavaScript</Badge>
                                    <Badge variant="secondary">Tailwind CSS</Badge>
                                    <Badge variant="secondary">HTML/CSS</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-muted/50">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>

                    <Tabs defaultValue="experience" className="max-w-3xl mx-auto">
                        <TabsList className="grid w-full grid-cols-2 mb-8">
                            <TabsTrigger value="experience">Experience</TabsTrigger>
                            <TabsTrigger value="projects">Projects</TabsTrigger>
                        </TabsList>

                        <TabsContent value="experience" className="space-y-6">
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold">Incoming Software Development Intern</h3>
                                            <p className="text-muted-foreground">Amazon</p>
                                        </div>
                                        <p className="text-sm text-muted-foreground">Sept 2025 - Future</p>
                                    </div>
                                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold">Incoming Software Development Intern</h3>
                                            <p className="text-muted-foreground">Ecolab</p>
                                        </div>
                                        <p className="text-sm text-muted-foreground">June 2025 - Future</p>
                                    </div>
                                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold">Software Development Intern</h3>
                                            <p className="text-muted-foreground">NCAA</p>
                                        </div>
                                        <p className="text-sm text-muted-foreground">May 2024 - Aug 2024</p>
                                    </div>
                                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold">Software Development Intern</h3>
                                            <p className="text-muted-foreground">Merck</p>
                                        </div>
                                        <p className="text-sm text-muted-foreground">Jan 2024 - May 2024</p>
                                    </div>
                                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="projects" className="space-y-6">
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold">Spaara</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Badge>Backend</Badge>
                                                <Badge variant="outline">Frontend</Badge>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="sm" className="gap-1" asChild>
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                View Project <ExternalLink className="h-4 w-4"/>
                                            </a>
                                        </Button>
                                    </div>
                                    <p className="text-muted-foreground mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary">Node.js</Badge>
                                        <Badge variant="secondary">Express</Badge>
                                        <Badge variant="secondary">PostgreSQL</Badge>
                                        <Badge variant="secondary">React</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
                        <p className="text-muted-foreground mb-8">
                            I'm currently available for internships and full-time opportunities. If you're interested
                            in working together, feel free to reach out!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <a href="mailto:your.email@example.com">
                                    <Mail className="mr-2 h-4 w-4"/> Email Me
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="mr-2 h-4 w-4"/> Connect on LinkedIn
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-8 border-t">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-muted-foreground">© {new Date().getFullYear()} Your Name. All rights
                            reserved.</p>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <Button variant="ghost" size="icon" asChild>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <Github className="h-5 w-5"/>
                                    <span className="sr-only">GitHub</span>
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="h-5 w-5"/>
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a href="mailto:your.email@example.com">
                                    <Mail className="h-5 w-5"/>
                                    <span className="sr-only">Email</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
