import React from 'react'

export default function DonateTreeForm() {
    return (
        <>
            <form className="donate-tree">
                <input type="text" name="email" placeholder="your email"/>
                <input type="text" name="donation" placeholder="donation amount"/>
                <button>Donate Now!</button>
            </form>
        </>
    );
}
