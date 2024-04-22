import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "~/components/ui/avatar"
import {
    Card,
    CardContent,
    CardDescription, CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import {Link, useNavigate} from "react-router-dom";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList} from "~/components/ui/breadcrumb.tsx";
import React from "react";
import {GenderWiseGraph} from "~/components/GenderDashboard/GenderBarGraph.tsx";
import {MonthWiseGraph} from "~/components/GenderDashboard/MonthWiseGraph.tsx";
import {QuarterWiseData} from "~/components/GenderDashboard/quarterWiseData.tsx";
import {AgeGroup} from "~/components/GenderDashboard/AgeGroupGraphs.tsx";
import {PurposeOfVisitGraph} from "~/components/GenderDashboard/PurposeOfVisit.tsx";
import {Button} from "~/components/ui/button.tsx";

// import {cn} from "~/lib/utils.ts";

export function DashboardFTA() {

    const navigate = useNavigate();
    const routeChange = () => {
        navigate('../compareFTA');
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header
                    className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Breadcrumb className="hidden md:flex">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/">Dashboard</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    </div>
                    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
                            <MonthWiseGraph/>
                        </Card>
                            <QuarterWiseData/>
                    </div>

                    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">

                            <GenderWiseGraph/>


                    </div>

                    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                        <Card
                            className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
                        >
                            <AgeGroup/>
                        </Card>
                        <Card x-chunk="dashboard-01-chunk-5">
                            <CardHeader>
                                <CardTitle>Over All</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-8">
                                <div className="flex items-center gap-4">
                                    <Avatar className="hidden h-9 w-9 sm:flex">
                                        <AvatarImage src="/avatars/01.png" alt="Avatar"/>
                                        <AvatarFallback>M</AvatarFallback>
                                    </Avatar>
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium leading-none">
                                            Male
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium">1000</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Avatar className="hidden h-9 w-9 sm:flex">
                                        <AvatarImage src="/avatars/02.png" alt="Avatar"/>
                                        <AvatarFallback>F</AvatarFallback>
                                    </Avatar>
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium leading-none">
                                            Female
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium">1000</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Avatar className="hidden h-9 w-9 sm:flex">
                                        <AvatarImage src="/avatars/03.png" alt="Avatar"/>
                                        <AvatarFallback>NA</AvatarFallback>
                                    </Avatar>
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium leading-none">
                                            Not Responded
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium">1000</div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                        <Card
                            className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
                        >
                            <PurposeOfVisitGraph/>
                        </Card>
                        <Card x-chunk="dashboard-01-chunk-5">
                            <CardHeader>
                                <CardTitle>Over All</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-8">
                                <div className="flex items-center gap-4">
                                    <Avatar className="hidden h-9 w-9 sm:flex">
                                        <AvatarImage src="/avatars/01.png" alt="Avatar"/>
                                        <AvatarFallback>M</AvatarFallback>
                                    </Avatar>
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium leading-none">
                                            Male
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium">1000</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Avatar className="hidden h-9 w-9 sm:flex">
                                        <AvatarImage src="/avatars/02.png" alt="Avatar"/>
                                        <AvatarFallback>F</AvatarFallback>
                                    </Avatar>
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium leading-none">
                                            Female
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium">1000</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Avatar className="hidden h-9 w-9 sm:flex">
                                        <AvatarImage src="/avatars/03.png" alt="Avatar"/>
                                        <AvatarFallback>NA</AvatarFallback>
                                    </Avatar>
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium leading-none">
                                            Not Responded
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium">1000</div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                            <Card className="sm:col-span-6" x-chunk="dashboard-05-chunk-0">
                                <CardHeader className="pb-3">
                                    <CardTitle>Explore</CardTitle>
                                    <CardDescription className="leading-relaxed">
                                        Get More In Depth Information of these data points.
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Button onClick={routeChange}>Explore</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
