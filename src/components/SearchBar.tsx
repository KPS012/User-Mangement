import React, { useState } from 'react';

interface Props {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [term, setTerm] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form className='my-4 mb-8' onSubmit={handleSubmit}>
      <input className="p-2 border-b-2 border-[#555555] outline-0  " type="text" placeholder="Search by name or username" value={term} onChange={handleChange} />
      <button className='ml-4 rounded-lg bg-[#141517] text-white px-[16px] py-[8px] hover:bg-[#455ce9]' type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
