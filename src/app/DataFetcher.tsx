import React from 'react';

async function fetchData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL as string);
  const data = await res.json();
  return data;
}

export default async function DataFetcher() {
  const result = await fetchData();

  return (
    <div className='flex flex-row gap-4'>
      {result?.data?.map((users:{id:string,name:string,age:string})=>{

        return <div>
            <h2>Id: {users.id}</h2>
            <h2>Name: {users.name}</h2>
            <h2>Age: {users.age}</h2>
        </div>
      })}
    </div>
  );
}
