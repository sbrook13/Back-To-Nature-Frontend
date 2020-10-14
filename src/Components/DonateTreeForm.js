import React from 'react'

export default function DonateTreeForm() {
    return (
        <>
            <form className="donate-tree">
                <input type="text" name="email" placeholder="email"/>
                <input type="text" name="donation" placeholder="donation"/>
                <button>Submit</button>
            </form>
        </>
    );
}
