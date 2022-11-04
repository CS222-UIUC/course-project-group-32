import { render, fireEvent } from '@testing-library/react'
import SearchBar from './SearchBar'
import '@testing-library/jest-dom/extend-expect'
import Data from './Data.json'



describe('Input value', () => {
  it('updates on change', () => {
    const setSearch = jest.fn((value) => {})
    
    const { queryByPlaceholderText } = render(<SearchBar placeholder="Search Artsi..." data={Data}/>)

    const searchInput = queryByPlaceholderText('Search Artsi...')

    fireEvent.change(searchInput, { target: { value: 'test' } })

    expect(searchInput.value).toBe('test')
  })
})

test("searching", () => {
    const { getByRole } = render(<SearchBar />);
    const name = getByRole('search');
    expect(name).toBeInTheDocument()
});