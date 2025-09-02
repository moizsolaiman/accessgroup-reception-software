import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page', () => {
  it('renders the "Read our docs" button with correct link', () => {
    render(<Home />);

    // Find the link by its text
    const docsButton = screen.getByRole('link', { name: /read our docs/i });

    // Assert it exists in the document
    expect(docsButton).toBeInTheDocument();

    // Assert correct href
    expect(docsButton).toHaveAttribute(
      'href',
      'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
    );

    // Assert it has proper styles (optional)
    expect(docsButton).toHaveClass('rounded-full', 'border', 'transition-colors');
  });
});
