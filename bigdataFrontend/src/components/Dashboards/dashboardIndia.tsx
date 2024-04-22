import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import {Link} from "react-router-dom";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList} from "~/components/ui/breadcrumb.tsx";
import React from "react";
import ChoroplethMap from "~/components/IndiaDashboard/IndiaMap.tsx";
import UttarPradeshChoroplethMap from "~/components/IndiaDashboard/StateMap.tsx";
export function DashboadIndia() {

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

                    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">

                        <Card
                            className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
                        >
                            <ChoroplethMap />
                            {/*<UttarPradeshChoroplethMap />*/}
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
