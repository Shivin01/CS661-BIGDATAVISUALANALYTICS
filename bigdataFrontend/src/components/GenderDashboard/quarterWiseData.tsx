import {Avatar, AvatarFallback, AvatarImage} from "~/components/ui/avatar.tsx";
import React from "react";
import data from "~/components/GenderDashboard/output1.json";
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


export function QuarterWiseData() {

    const [yearSelected, setYearSelected] = React.useState<string>('2005')

    const years = Object.keys(data["January"])

    let q1: number = 0
    let q2: number = 0
    let q3: number = 0
    let q4: number = 0

    for (const property in data) {
        if (["January", "February", "March"].includes(property)) {
            q1 += data[property][yearSelected]
        }
        if (["April", "May", "June"].includes(property)) {
            q2 += data[property][yearSelected]
        }
        if (["July", "August", "September"].includes(property)) {
            q3 += data[property][yearSelected]
        }
        if (["October", "November", "December"].includes(property)) {
            q4 += data[property][yearSelected]
        }
    }

    let finalData = [
        {
            name: "Quarter 1",
            target: 1,
            value: q1
        },
        {
            name: "Quarter 2",
            target: 2,
            value: q2
        },
        {
            name: "Quarter 3",
            target: 3,
            value: q3
        },
        {
            name: "Quarter 4",
            target: 4,
            value: q4
        }
    ]

    const updateData = () => {
        let q1: number = 0
        let q2: number = 0
        let q3: number = 0
        let q4: number = 0

        for (const property in data) {
            if (["January", "February", "March"].includes(property)) {
                q1 += data[property][yearSelected]
            }
            if (["April", "May", "June"].includes(property)) {
                q2 += data[property][yearSelected]
            }
            if (["July", "August", "September"].includes(property)) {
                q3 += data[property][yearSelected]
            }
            if (["October", "November", "December"].includes(property)) {
                q4 += data[property][yearSelected]
            }
        }

        return [
            {
                name: "Quarter 1",
                target: 1,
                value: q1
            },
            {
                name: "Quarter 2",
                target: 2,
                value: q2
            },
            {
                name: "Quarter 3",
                target: 3,
                value: q3
            },
            {
                name: "Quarter 4",
                target: 4,
                value: q4
            }
        ]
    }

    const handleSelect = (e) => {
        setYearSelected(e)
        updateData()

    }

    return (
        <>
            <Card x-chunk="dashboard-01-chunk-5">
                <CardHeader>
                    <CardTitle>Over All</CardTitle>
                    <CardDescription>
                        <Select onValueChange={handleSelect} defaultValue={'2005'}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a Year"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Years</SelectLabel>
                                    {years.map(item => <SelectItem key={item} value={item}>{item}</SelectItem>)}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-8">
                    {finalData.map(item => {
                        return (
                            <div className="flex items-center gap-4">
                                <Avatar className="hidden h-9 w-9 sm:flex">
                                    <AvatarImage src="/avatars/01.png" alt="Avatar"/>
                                    <AvatarFallback>{item.target}</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <p className="text-sm font-medium leading-none">
                                        {item.name}
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">{item.value}</div>
                            </div>
                        )
                    })}
                </CardContent>
            </Card>

        </>
    )
}