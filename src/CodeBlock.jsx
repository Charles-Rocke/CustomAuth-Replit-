function CodeBlock ({ domCode }) {
  console.log('domCode value: ', domCode)
  return (
        <pre style={{
          fontSize: '14px',
          backgroundColor: '#000',
          color: '#05C1FF'
        }}>
          {domCode
            ? `import PasskeyButton from '../bloc/components/PasskeyButton'
import { useEffect, useState } from 'react'

/**
 * Description
 * @component
 * @return {type} - Description
 */
function UserCard () {
  const [passkeyActive, setPasskeyActive] = useState(false) // End user can select or deselect passkey
  const [email, setEmail] = useState(null) // Gets and stores current end user email
  const [passkeySigninActive, setPasskeySigninActive] = useState(false)

  /**
   * Set passkey active/un-active
   * @function
   */
  function handlePasskeyClick () {
    // If passkeyActive is being changed from true to false
    if (passkeyActive) {
      setPasskeySigninActive(!passkeyActive) // Set opposite passkeySigninActive to true
    }
    setPasskeyActive(!passkeyActive) // Toggle passkeyActive state
  }
	/**
	 * Set passkey active/un-active
	 * @function
	 * @param {event} e - Used to prevent page reload
	 */
	function handleSubmit(e) {
		e.preventDefault();
	}
  return (
    ${domCode}
  )
}
export default UserCard`
            : ''}
        </pre>
  )
}

export default CodeBlock
