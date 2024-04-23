import {
    Card,
    CardContent,
    CardDescription, CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import {Link} from "react-router-dom";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList} from "~/components/ui/breadcrumb.tsx";
import React from "react";
import ChoroplethMap from "~/components/IndiaDashboard/IndiaMap.tsx";
import {StateWiseGraph} from "~/components/IndiaDashboard/IndiaStateLineGraph.tsx";
import WorldMap from "~/components/MainDashboard/worldmap.tsx";
import {Button} from "~/components/ui/button.tsx";

export function DashboadIndia() {

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header
                    className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4
                     sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
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
                <main
                    className="grid flex-1 items-start gap-4 p-4 grid-cols-1 sm:px-6 sm:py-0 md:gap-6 lg:grid-cols-2 xl:grid-cols-2">
                    <Card className="lg:col-span-2 xl:col-span-2" x-chunk="dashboard-05-chunk-0">
                        <CardHeader className="pb-3">
                            <CardTitle>World V/S India</CardTitle>
                            <CardDescription className="leading-relaxed">
                                Tourism and Hospitality play an extraordinary role in driving the nation's growth and
                                prosperity. India proudly boasts a tapestry of geographical diversity, encompassing
                                awe-inspiring world heritage sites and niche tourism offerings such as captivating
                                cruise tourism, exhilarating adventure tourism, renowned medical tourism, and
                                mesmerizing eco-tourism. These unique offerings have resulted in an exponential increase
                                in tourist arrivals.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
                        <CardHeader className="px-7">
                            <CardTitle>Trend In Tourism</CardTitle>
                            <CardDescription>
                                Trends in Tourism from 1952 to 2007 ( Click on Play ).
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChoroplethMap/>
                        </CardContent>
                    </Card>

                </main>
            </div>
        </div>
    )
}
