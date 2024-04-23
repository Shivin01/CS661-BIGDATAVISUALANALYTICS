import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
} from "~/components/ui/breadcrumb.tsx"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card.tsx"
import {Link, useNavigate, useParams} from "react-router-dom";
import data from "~/components/GenderDashboard/Data/output8_updated.json";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "~/components/ui/select.tsx";
import React from "react";
import {LineGraphComponent} from "~/components/GenderDashboard/GenderBarGraph.tsx";
import {AgeGraph} from "~/components/GenderDashboard/AgeGroupGraphs.tsx";
import {PurposeOfVisit} from "~/components/GenderDashboard/PurposeOfVisit.tsx";
import {LineGraphStateComponent, StateWiseGraph} from "~/components/IndiaDashboard/IndiaStateLineGraph.tsx";
import Data2019 from '../Dashboards/Data/2019_updated_data.json'
import Data2020 from '../Dashboards/Data/2019_updated_data.json'
import Data2021 from '../Dashboards/Data/2021_updated_data.json'
import stateConfigData from '../Dashboards/Data/StatesandUTs.json';
import topMonu from '../Dashboards/Data/output.json'
import {StatePieChart} from "~/components/StateDashboard/StatePieChart.tsx";
import {StateTopMonument} from "~/components/StateDashboard/StateTopMonuments.tsx";


export function StateDashboard() {

    const {stateName} = useParams()
    const stateReadData = stateConfigData[stateName.replaceAll(" ", "").replace(/[^a-zA-Z ]/g, "")]

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header
                    className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Breadcrumb className="hidden md:flex">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="#">Dashboard</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>
                <main className="grid flex-1 items-start gap-4 p-4 grid-cols-1 sm:px-6 sm:py-0 md:gap-6 lg:grid-cols-2 xl:grid-cols-2">


                    {/*<Card className="" x-chunk="dashboard-05-chunk-3">*/}
                    {/*    <CardHeader className="px-7">*/}
                    {/*        <CardTitle>{stateReadData} Foreign and Domestic Travellers</CardTitle>*/}
                    {/*        <CardDescription>*/}
                    {/*            Ranking of India*/}
                    {/*        </CardDescription>*/}
                    {/*    </CardHeader>*/}
                    {/*    <CardContent>*/}
                    {/*        /!*<LineGraphStateComponent state={stateName.toUpperCase()} />*!/*/}
                    {/*        /!*<StatePieChart state={stateName.toUpperCase()} />*!/*/}
                    {/*        <StateTopMonument state={stateName.toUpperCase()} type="Domestic Travel" />*/}
                    {/*    </CardContent>*/}
                    {/*</Card>*/}

                    <StatePieChart state={stateName.toUpperCase()} stateReadData={stateReadData}/>

                    {/*Line graph of Gender*/}
                    <Card x-chunk="dashboard-01-chunk-3">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <LineGraphStateComponent state={stateName.toUpperCase()} />
                        </CardContent>
                    </Card>

                    {/*Age group*/}

                    {/*<Card className="" x-chunk="dashboard-05-chunk-3">*/}
                    {/*    <CardHeader className="px-7">*/}
                    {/*        <CardTitle>{stateReadData} Foreign and Domestic Travellers</CardTitle>*/}
                    {/*        <CardDescription>*/}
                    {/*            Ranking of India*/}
                    {/*        </CardDescription>*/}
                    {/*    </CardHeader>*/}
                    {/*    <CardContent>*/}
                    {/*        <LineGraphStateComponent state={stateName.toUpperCase()} />*/}
                    {/*    </CardContent>*/}
                    {/*</Card>*/}

                    {/*<Card className="" x-chunk="dashboard-05-chunk-3">*/}
                    {/*    <CardHeader className="px-7">*/}
                    {/*        <CardTitle>Trend In Tourism</CardTitle>*/}
                    {/*        <CardDescription>*/}
                    {/*            Trends in Tourism from 1952 to 2007 ( Click on Play ).*/}
                    {/*        </CardDescription>*/}
                    {/*    </CardHeader>*/}
                    {/*    <CardContent>*/}
                    {/*        <AgeGraph country={countrySelected}/>*/}
                    {/*    </CardContent>*/}
                    {/*</Card>*/}

                    {/*<Card className="" x-chunk="dashboard-05-chunk-3">*/}
                    {/*    <CardHeader className="px-7">*/}
                    {/*        <CardTitle>India Ranking</CardTitle>*/}
                    {/*        <CardDescription>*/}
                    {/*            Ranking of India*/}
                    {/*        </CardDescription>*/}
                    {/*    </CardHeader>*/}
                    {/*    <CardContent>*/}

                    {/*        <AgeGraph country={countrySelected2}/>*/}
                    {/*    </CardContent>*/}
                    {/*</Card>*/}

                    {/*Purpose of Visit*/}

                    {/*<Card className="" x-chunk="dashboard-05-chunk-3">*/}
                    {/*    <CardHeader className="px-7">*/}
                    {/*        <CardTitle>Trend In Tourism</CardTitle>*/}
                    {/*        <CardDescription>*/}
                    {/*            Trends in Tourism from 1952 to 2007 ( Click on Play ).*/}
                    {/*        </CardDescription>*/}
                    {/*    </CardHeader>*/}
                    {/*    <CardContent>*/}
                    {/*        <PurposeOfVisit country={countrySelected}/>*/}
                    {/*    </CardContent>*/}
                    {/*</Card>*/}

                    {/*<Card className="" x-chunk="dashboard-05-chunk-3">*/}
                    {/*    <CardHeader className="px-7">*/}
                    {/*        <CardTitle>India Ranking</CardTitle>*/}
                    {/*        <CardDescription>*/}
                    {/*            Ranking of India*/}
                    {/*        </CardDescription>*/}
                    {/*    </CardHeader>*/}
                    {/*    <CardContent>*/}

                    {/*        <PurposeOfVisit country={countrySelected2}/>*/}
                    {/*    </CardContent>*/}
                    {/*</Card>*/}


                </main>
            </div>
        </div>
    )
}
