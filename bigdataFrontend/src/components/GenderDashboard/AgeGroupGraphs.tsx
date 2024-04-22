import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis, Radar, PolarRadiusAxis, Legend
} from 'recharts';
import {useTheme} from "~/provider/theme.tsx";
import data from "~/components/GenderDashboard/output6_updated.json";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card.tsx";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "~/components/ui/select.tsx";

const AgeGraph = (country) => {
    // Extracting the data for the specified year and formatting for the chart

    const countryData = data.filter((d) => d.Country.toUpperCase() === country.country.toUpperCase())

    console.log(countryData);


    return (
        <ResponsiveContainer width="100%" height={350}>
            <RadarChart outerRadius={90} width={730} height={250} data={countryData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    );
};


export function AgeGroup() {

    const [countrySelected, setCountrySelected] = React.useState<string>("UNITED STATES OF AMERICA");
    const countries = Array.from(new Set(data.map((d) => {
        return d.Country.toUpperCase()
    }))).sort();

    const handleSelect = (e) => {
        setCountrySelected(e)
    }

    return (
        <Card className="" x-chunk="dashboard-05-chunk-3">
            <CardHeader className="px-7">
                <CardTitle></CardTitle>
                <CardDescription>
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
                </CardDescription>
            </CardHeader>
            <CardContent>
                <CardContent className="p-6 text-sm">
                    <AgeGraph country={countrySelected} />
                    {/*<LineGraphComponent country={countrySelected}/>*/}
                </CardContent>
            </CardContent>
        </Card>
    )
}

// export default LineGraphComponent;