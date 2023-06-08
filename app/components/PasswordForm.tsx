const PasswordForm = () => {
    return (
        <>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Mot de passe actuel 
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="px-4 bg-transparent block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Nouveau mot de passe
                    </label>
                    <div className="mt-2 flex flex-col">
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="px-4 bg-transparent block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <span className="text-xs text-gray-900"> Votre nouveau mot de passe doit comporter plus de 8 caractères.  </span>   
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Confirmer nouveau mot de passe 
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="px-4 bg-transparent block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>
            <hr className="mt-5 py-5 text-slate-800" />
            <button 
                type="submit" 
                className="
                relative
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-lg
                hover:opacity-80
                transition
                bg-indigo-500
                text-white
                py-3
                px-32
                mb-5
                "
            >
                Enregistrer
            </button>
        </>
    );
}

export default PasswordForm;