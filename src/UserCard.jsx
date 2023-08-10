import PasskeyButton from '../bloc/components/PasskeyButton'
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
    <form onSubmit={handleSubmit}>
  <div className="card" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">Signup/Login</h5>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {!passkeyActive && (
        <div>
          <label htmlFor="inputPassword5" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="inputPassword5"
            className="form-control"
            aria-describedby="passwordHelpBlock"
          />
        </div>
      )}

      <ul>
        {!passkeyActive ? (
          <button onClick={handlePasskeyClick}>Passkey</button>
        ) : (
          <PasskeyButton
            signinActive={passkeySigninActive}
            onClick={setPasskeySigninActive}
            id='btnRegister'
            payload={{
              apiKey: import.meta.env.VITE_API_BLOC_API_KEY,
              domain: import.meta.env.VITE_API_base_domain,
              domainName: import.meta.env.VITE_API_domain_name,
              email
            }}
          />
        )}
      </ul>
    </div>
  </div>
</form>
  )
}
export default UserCard