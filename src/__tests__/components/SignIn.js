import React from 'react';
import { SignInFormikForm } from '../../components/SignIn';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';
const {act} = TestRenderer;

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignInFormikForm onSubmit={ onSubmit } />);

      await act(async () => {
        fireEvent.changeText(getByTestId('usernameInput'), 'kalle');
      });

      await act(async () => {
        fireEvent.changeText(getByTestId('passwordInput'), 'password');
      });

      await act(async () => {
        fireEvent.press(getByTestId('confirmButton'));
      });
      
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password'
        });
      });
    });
  });
});