import WhoAmI from '@/components/_development/whoami';
import React from 'react';
import TodosPage from './todos/page';

export default function Page() {
  return (
    <div className='flex flex-col gap-2'>
      <WhoAmI />
      <TodosPage />
    </div>
  );
}