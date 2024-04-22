import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
} from "~/components/ui/breadcrumb.tsx"
import {Button} from "~/components/ui/button.tsx"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card.tsx"
import {Link, useNavigate} from "react-router-dom";
import WorldMap from "~/components/MainDashboard/worldmap.tsx";
import BarGraphMain from "~/components/MainDashboard/BarGraphMain.tsx";
import data from "~/components/GenderDashboard/Data/output8.json";
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
import {MonthWiseGraph} from "~/components/GenderDashboard/MonthWiseGraph.tsx";
import {GenderWiseGraph, LineGraphComponent} from "~/components/GenderDashboard/GenderBarGraph.tsx";
import {AgeGraph} from "~/components/GenderDashboard/AgeGroupGraphs.tsx";
import {PurposeOfVisit} from "~/components/GenderDashboard/PurposeOfVisit.tsx";

export function CompareDashboardFTA() {

    const navigate = useNavigate();
    const routeChange = () => {
        navigate('../exploreFta');
    }

    const [countrySelected, setCountrySelected] = React.useState<string>("UNITED STATES OF AMERICA");
    const [countrySelected2, setCountrySelected2] = React.useState<string>("UNITED STATES OF AMERICA");
    const countries = Array.from(new Set(data.map((d) => {
        return d.Country.toUpperCase()
    }))).sort();

    // const countryData = data.filter((d) => d.Country.toUpperCase() === country.country).map(item => {
    //     return {
    //         "Year": item.Year,
    //         "BusinessandProfessional": item.BusinessandProfessional,
    //         "LeisureHolidayandRecreation": item.BusinessandProfessional,
    //         "Medical": item.Medical,
    //         "IndianDiaspora": item.IndianDiaspora,
    //         "Others": item.Others
    //
    //     }
    // })

    const handleSelect = (e) => {
        setCountrySelected(e)
    }

    const handleSelect2 = (e) => {
        setCountrySelected2(e)
    }

    // console.log(countryData);

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
                <main
                    className="grid flex-1 items-start gap-4 p-4 grid-cols-1 sm:px-6 sm:py-0 md:gap-6 lg:grid-cols-2 xl:grid-cols-2">
                    <Card x-chunk="dashboard-01-chunk-2">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Country 1</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Select onValueChange={handleSelect} defaultValue={'UNITED STATES OF AMERICA'}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a Country"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Months</SelectLabel>
                                        {countries.map(item => <SelectItem key={item} value={item}>{item}</SelectItem>)}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-3">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Select onValueChange={handleSelect2} defaultValue={'UNITED STATES OF AMERICA'}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a Country"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Months</SelectLabel>
                                        {countries.map(item => <SelectItem key={item} value={item}>{item}</SelectItem>)}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </CardContent>
                    </Card>

                    {/*Line graph of Gender*/}
                    <Card className="" x-chunk="dashboard-05-chunk-3">
                        <CardHeader className="px-7">
                            <CardTitle>Trend In Tourism</CardTitle>
                            <CardDescription>
                                Trends in Tourism from 1952 to 2007 ( Click on Play ).
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <LineGraphComponent country={countrySelected}/>
                        </CardContent>
                    </Card>

                    <Card className="" x-chunk="dashboard-05-chunk-3">
                        <CardHeader className="px-7">
                            <CardTitle>India Ranking</CardTitle>
                            <CardDescription>
                                Ranking of India
                            </CardDescription>
                        </CardHeader>
                        <CardContent>

                            <LineGraphComponent country={countrySelected2}/>
                        </CardContent>
                    </Card>

                    {/*Age group*/}

                    <Card className="" x-chunk="dashboard-05-chunk-3">
                        <CardHeader className="px-7">
                            <CardTitle>Trend In Tourism</CardTitle>
                            <CardDescription>
                                Trends in Tourism from 1952 to 2007 ( Click on Play ).
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <AgeGraph country={countrySelected}/>
                        </CardContent>
                    </Card>

                    <Card className="" x-chunk="dashboard-05-chunk-3">
                        <CardHeader className="px-7">
                            <CardTitle>India Ranking</CardTitle>
                            <CardDescription>
                                Ranking of India
                            </CardDescription>
                        </CardHeader>
                        <CardContent>

                            <AgeGraph country={countrySelected2}/>
                        </CardContent>
                    </Card>

                    {/*Purpose of Visit*/}

                    <Card className="" x-chunk="dashboard-05-chunk-3">
                        <CardHeader className="px-7">
                            <CardTitle>Trend In Tourism</CardTitle>
                            <CardDescription>
                                Trends in Tourism from 1952 to 2007 ( Click on Play ).
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <PurposeOfVisit country={countrySelected}/>
                        </CardContent>
                    </Card>

                    <Card className="" x-chunk="dashboard-05-chunk-3">
                        <CardHeader className="px-7">
                            <CardTitle>India Ranking</CardTitle>
                            <CardDescription>
                                Ranking of India
                            </CardDescription>
                        </CardHeader>
                        <CardContent>

                            <PurposeOfVisit country={countrySelected2}/>
                        </CardContent>
                    </Card>


                </main>
            </div>
        </div>
    )
}
