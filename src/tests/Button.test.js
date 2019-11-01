import { fireEvent, render } from '@testing-library/svelte';
import Button from '../components/Button.svelte';

function setup(props = {}) {
  return render(Button, { props });
}

test('shows proper heading when rendered', () => {
  const { getByText } = setup();
  expect(getByText('Count incremented by 1')).toBeInTheDocument();
});

test('changes button text on click', async () => {
  const { getByText, queryByText } = setup({ increment: 2 });

  expect(getByText('Count incremented by 2')).toBeInTheDocument();
  await fireEvent.click(getByText('Increment'));
  expect(getByText('Reset')).toBeInTheDocument();
});
