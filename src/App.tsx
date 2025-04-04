import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  ChevronDown, 
  Filter, 
  Download,
  Receipt,
  ArrowRight,
  Plus,
  FileText
} from 'lucide-react';

function App() {
  const data=[{
    date:"Apr 3",
    name:"Payment from Acme Corp",
    amount:"$419.00",
    account:"AR",
    status :"failed",
  },
  {
    date:"Apr 3",
    name:"Payment from Acme Corp",
    amount:"$419.00",
    account:"AR",
    status :"failed",
  },
  {
    date:"Apr 3",
    name:"Payment from Acme Corp",
    amount:"$419.00",
    account:"AR",
    status :"failed",
  },
  {
    date:"Apr 4",
    name:"Payment from Acme Corp",
    amount:"$419.00",
    account:"AR",
    status :"failed",
  },
  {
    date:"Apr 4",
    name:"Payment from Acme Corp",
    amount:"$419.00",
    account:"AR",
    status :"failed",
  }]
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Transactions</h1>
          <div className="flex gap-3">
            <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              <Receipt className="w-4 h-4 mr-2" />
              Match Receipts
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              <Download className="w-4 h-4 mr-2" />
              Export All
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <button className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            <FileText className="w-4 h-4 mr-2" />
            Data Views
            <ChevronDown className="w-4 h-4 ml-2" />
          </button>
          
          <button className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </button>

          <button className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            <Calendar className="w-4 h-4 mr-2" />
            Date
            <ChevronDown className="w-4 h-4 ml-2" />
          </button>

          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search keywords..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            Amount
            <ChevronDown className="w-4 h-4 ml-2" />
          </button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date (UTC)
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  To/From
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Account
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Method
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attachment
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {
                data.map((row,index)=>{
                  if (index === 0 || data[index - 1].date !== data[index].date)
                    return (
                      <TransactionRow
                        first
                        date={row.date}
                        name={row.name}
                        amount={row.amount}
                        account={row.account}
                        paymentMethod={
                          <>
                            Request or Invoice <ArrowRight className="inline w-4 h-4" />
                          </>
                        }
                      />
                    );
                  else
                    return (
                      <TransactionRow
                        date={row.date}
                        name={row.name}
                        amount={row.amount}
                        account={row.account}
                        paymentMethod={
                          <>
                            Request or Invoice <ArrowRight className="inline w-4 h-4" />
                          </>
                        }
                      />
                    );
                })
              }
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function TransactionRow({ date, name, amount, account, paymentMethod, status ,first}: {
  date: string;
  name: string;
  amount: string;
  account: string;
  paymentMethod: React.ReactNode;
  status?: string;
  first?:boolean
}) {
  return (
    <tr className="hover:bg-gray-50 hover:text-black">
      <td className={`px-6 py-4 whitespace-nowrap text-sm ${first?"text-black":"text-white"}`}>
        <div className='hover:text-black'>{date}</div>
     
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="text-sm font-medium text-gray-900">
            {name}
            {status && (
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                {status}
              </span>
            )}
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {amount}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {account}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {paymentMethod}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button className="text-gray-400 hover:text-gray-500">
          <Plus className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
}

export default App;