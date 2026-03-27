import { Link } from 'react-router-dom';
import { footer_info } from '../constants/data';

export function Footer() {
  return (
    <footer className="bg-clPrimary text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">{footer_info.title}</h2>
            <p className="text-lg">{footer_info.information}</p>
            <div className="flex space-x-4">
              {footer_info.socials.map((ele, index) => {
                const Icon = ele.icon
                return(
                <a key={index} href={ele.path} target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 flex items-center justify-center w-10 h-10">
                  <Icon className="text-[#0e3292] w-5 h-5" />
                  <span className="sr-only">{ele.name}</span>
                </a>
              )})}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Products</h3>
            <nav className="flex flex-col space-y-3">
              {footer_info.products.map(ele => (
                <Link to={ele.path} className="hover:underline" key={ele.label}>
                  {ele.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Resources</h3>
            <nav className="flex flex-col space-y-3">
              {footer_info.resources.map(ele => (
                <Link to={ele.path} className="hover:underline" key={ele.label}>
                  {ele.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Company</h3>
            <nav className="flex flex-col space-y-3">
              {footer_info.company.map(ele => (
                <Link to={ele.path} className="hover:underline" key={ele.label}>
                  {ele.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center">
          <p>© {new Date().getFullYear()} OneVerify. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

