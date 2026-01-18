function Header() {
  return (
    <header className="text-center mb-10 md:mb-14">
      {/* Logo */}
      <div className="inline-flex items-center justify-center gap-3">
        <div className="relative">
          {/* Glow effect behind icon */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl blur-lg opacity-40" />
          
         
        </div>
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Calm
          </span>
          <span className="text-gray-800"> Translate</span>
        </h1>
      </div>
       {/* Subtitle */}
      <p className="text-gray-600 text-sm md:text-base flex items-center justify-center gap-2 flex-wrap">
        <span>Arabic</span>
        <span className="text-blue-600">↔</span>
        <span>English</span>
        <span className="text-gray-400">·</span>
        <span className="text-gray-500">Powered by AI</span>
      </p>
    </header>

  );
}

export default Header;