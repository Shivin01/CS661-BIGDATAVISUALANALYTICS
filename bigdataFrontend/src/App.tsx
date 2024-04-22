import WorldMap from "~/components/MainDashboard/worldmap.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NoMatch from "~/components/noMatch.tsx";
import AnimatedPieChart from "~/components/AnimatedPieChart.tsx";
import GroupedBarChart from "~/components/GroupedBarChart.tsx";
import StackedBarChart from "~/components/StackedBarChart.tsx";
import {Dashboard} from "~/components/Dashboards/dashboard.tsx";
import {TooltipProvider} from "~/components/ui/tooltip.tsx";
import {ThemeProvider} from "./provider/theme";
import Sidebar from "~/components/sidebar.tsx";
import {DashboardFTA} from "~/components/Dashboards/dashboardFTA.tsx";
import {DashboadIndia} from "~/components/Dashboards/dashboardIndia.tsx";
import {CompareDashboardFTA} from "~/components/Dashboards/CompareFTA.tsx";



function App() {

    const queryClient = new QueryClient()

// TODO: Update private route.
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    children: [
                        {
                            index: true,
                            element: <Dashboard/>,
                        },
                        {
                            path: '/exploreFta',
                            element: <DashboardFTA/>

                        },
                        {
                            path: '/exploreIndia',
                            element: <DashboadIndia />,
                        },
                        {
                            path: '/piechart',
                            element: <AnimatedPieChart/>
                        },
                        {
                            path: '/groupedBarChart',
                            element: <GroupedBarChart/>
                        },
                        {
                            path: '/stackedBarChart',
                            element: <StackedBarChart/>
                        },
                        {
                            path: '/compareFTA',
                            element: <CompareDashboardFTA/>
                        }
                    ]
                },
            ],
        },
        {
            path: "*",
            element: <NoMatch/>,
        },
    ]);

    return (
        // <WorldMap />
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                    <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>
                </TooltipProvider>
            </QueryClientProvider>
        </ThemeProvider>
        // <ToastContainer />
    )
}

function Layout() {

    return <Sidebar/>;
}

export default App


