"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Example from '@/components/data-visualization/spending-by-catogory'
import Example1 from '@/components/data-visualization/income-vs-expenses'
import Example2 from '@/components/data-visualization/top-spending-categories'

const tabList = [
  {
    label: "Spending by Category",
    value: "spending-by-category"
  },
  {
    label: "Income vs Expenses",
    value: "income-vs-expenses"
  },
  {
    label: "Top Spending Categories",
    value: "top-spending-categories"
  }
]

const DataVisualizationClient = () => {
  return (
    <div className=' bg-red-100 p-3 rounded-xl h-full overflow-auto grid grid-rows-[50px_1fr] gap-4'>
      <div className='px-2 flex items-center'>
        <h1 className='text-xl'>Data Visualization</h1>
      </div>
      {/* <div> */}
        <Tabs defaultValue="account" className="w-full  grid grid-rows-[auto_1fr] gap-4">
          <TabsList>
            {tabList.map((tab,index) => (
              <TabsTrigger className='p-4'  key={index} value={tab.value}>{tab.label}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent  className=' grid grid-cols-1 lg:grid-cols-[60%_1fr]' value="spending-by-category">
            <div className='bg-white rounded-xl p-5'><Example/></div>
            <div></div>
            </TabsContent>
          <TabsContent className=' grid grid-cols-1 lg:grid-cols-[60%_1fr]'  value="income-vs-expenses">
              <div className='bg-white rounded-xl p-5'><Example1/></div>
            <div></div>
          </TabsContent>
          <TabsContent className=' grid grid-cols-1 lg:grid-cols-[60%_1fr]'  value="top-spending-categories">
              <div className='bg-white rounded-xl p-5'><Example2/></div>
            <div></div>
          </TabsContent>
        </Tabs>
      {/* </div> */}
    </div>
  )
}

export default DataVisualizationClient
