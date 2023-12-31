import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, Fragment, useEffect } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
  fetchAllProductsAsync,
  selectAllproducts,
  fetchProductsByFilterAsync,
} from "../productListSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const sortOptions = [
  { name: "Best Rating", sort: "rating", order: "desc", current: false },
  { name: "Price: Low to High", sort: "price", order: "asc", current: false },
  { name: "Price: High to Low", sort: "price", order: "desc", current: false },
];
const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      {
        checked: false,
        label: "smartphones",
        value: "smartphones",
      },
      {
        checked: false,
        label: "laptops",
        value: "laptops",
      },
      {
        checked: false,
        label: "fragrances",
        value: "fragrances",
      },
      {
        checked: false,
        label: "skincare",
        value: "skincare",
      },
      {
        checked: false,
        label: "groceries",
        value: "groceries",
      },
      {
        checked: false,
        label: "home decoration",
        value: "home-decoration",
      },
      {
        checked: false,
        label: "furniture",
        value: "furniture",
      },
      {
        checked: false,
        label: "tops",
        value: "tops",
      },
      {
        checked: false,
        label: "womens dresses",
        value: "womens-dresses",
      },
      {
        checked: false,
        label: "womens shoes",
        value: "womens-shoes",
      },
      {
        checked: false,
        label: "mens shirts",
        value: "mens-shirts",
      },
      {
        checked: false,
        label: "mens shoes",
        value: "mens-shoes",
      },
      {
        checked: false,
        label: "mens watches",
        value: "mens-watches",
      },
      {
        checked: false,
        label: "womens watches",
        value: "womens-watches",
      },
      {
        checked: false,
        label: "womens bags",
        value: "womens-bags",
      },
      {
        checked: false,
        label: "womens jewellery",
        value: "womens-jewellery",
      },
      {
        checked: false,
        label: "sunglasses",
        value: "sunglasses",
      },
      {
        checked: false,
        label: "automotive",
        value: "automotive",
      },
      {
        checked: false,
        label: "motorcycle",
        value: "motorcycle",
      },
      {
        checked: false,
        label: "lighting",
        value: "lighting",
      },
    ],
  },
  {
    id: "brand",
    name: "Brands",
    options: [
      {
        checked: false,
        label: "Apple",
        value: "Apple",
      },
      {
        checked: false,
        label: "Samsung",
        value: "Samsung",
      },
      {
        checked: false,
        label: "OPPO",
        value: "OPPO",
      },
      {
        checked: false,
        label: "Huawei",
        value: "Huawei",
      },
      {
        checked: false,
        label: "Microsoft Surface",
        value: "Microsoft Surface",
      },
      {
        checked: false,
        label: "Infinix",
        value: "Infinix",
      },
      {
        checked: false,
        label: "HP Pavilion",
        value: "HP Pavilion",
      },
      {
        checked: false,
        label: "Impression of Acqua Di Gio",
        value: "Impression of Acqua Di Gio",
      },
      {
        checked: false,
        label: "Royal_Mirage",
        value: "Royal_Mirage",
      },
      {
        checked: false,
        label: "Fog Scent Xpressio",
        value: "Fog Scent Xpressio",
      },
      {
        checked: false,
        label: "Al Munakh",
        value: "Al Munakh",
      },
      {
        checked: false,
        label: "Lord   Al Rehab",
        value: "Lord - Al-Rehab",
      },
      {
        checked: false,
        label: "L'Oreal Paris",
        value: "L'Oreal Paris",
      },
      {
        checked: false,
        label: "Hemani Tea",
        value: "Hemani Tea",
      },
      {
        checked: false,
        label: "Dermive",
        value: "Dermive",
      },
      {
        checked: false,
        label: "ROREC White Rice",
        value: "ROREC White Rice",
      },
      {
        checked: false,
        label: "Fair &amp; Clear",
        value: "Fair &amp; Clear",
      },
      {
        checked: false,
        label: "Saaf &amp; Khaas",
        value: "Saaf &amp; Khaas",
      },
      {
        checked: false,
        label: "Bake Parlor Big",
        value: "Bake Parlor Big",
      },
      {
        checked: false,
        label: "Baking Food Items",
        value: "Baking Food Items",
      },
      {
        checked: false,
        label: "fauji",
        value: "fauji",
      },
      {
        checked: false,
        label: "Dry Rose",
        value: "Dry Rose",
      },
      {
        checked: false,
        label: "Boho Decor",
        value: "Boho Decor",
      },
      {
        checked: false,
        label: "Flying Wooden",
        value: "Flying Wooden",
      },
      {
        checked: false,
        label: "LED Lights",
        value: "LED Lights",
      },
      {
        checked: false,
        label: "luxury palace",
        value: "luxury palace",
      },
      {
        checked: false,
        label: "Golden",
        value: "Golden",
      },
      {
        checked: false,
        label: "Furniture Bed Set",
        value: "Furniture Bed Set",
      },
      {
        checked: false,
        label: "Ratttan Outdoor",
        value: "Ratttan Outdoor",
      },
      {
        checked: false,
        label: "Kitchen Shelf",
        value: "Kitchen Shelf",
      },
      {
        checked: false,
        label: "Multi Purpose",
        value: "Multi Purpose",
      },
      {
        checked: false,
        label: "AmnaMart",
        value: "AmnaMart",
      },
      {
        checked: false,
        label: "Professional Wear",
        value: "Professional Wear",
      },
      {
        checked: false,
        label: "Soft Cotton",
        value: "Soft Cotton",
      },
      {
        checked: false,
        label: "Top Sweater",
        value: "Top Sweater",
      },
      {
        checked: false,
        label: "RED MICKY MOUSE..",
        value: "RED MICKY MOUSE..",
      },
      {
        checked: false,
        label: "Digital Printed",
        value: "Digital Printed",
      },
      {
        checked: false,
        label: "Ghazi Fabric",
        value: "Ghazi Fabric",
      },
      {
        checked: false,
        label: "IELGY",
        value: "IELGY",
      },
      {
        checked: false,
        label: "IELGY fashion",
        value: "IELGY fashion",
      },
      {
        checked: false,
        label: "Synthetic Leather",
        value: "Synthetic Leather",
      },
      {
        checked: false,
        label: "Sandals Flip Flops",
        value: "Sandals Flip Flops",
      },
      {
        checked: false,
        label: "Maasai Sandals",
        value: "Maasai Sandals",
      },
      {
        checked: false,
        label: "Arrivals Genuine",
        value: "Arrivals Genuine",
      },
      {
        checked: false,
        label: "Vintage Apparel",
        value: "Vintage Apparel",
      },
      {
        checked: false,
        label: "FREE FIRE",
        value: "FREE FIRE",
      },
      {
        checked: false,
        label: "The Warehouse",
        value: "The Warehouse",
      },
      {
        checked: false,
        label: "Sneakers",
        value: "Sneakers",
      },
      {
        checked: false,
        label: "Rubber",
        value: "Rubber",
      },
      {
        checked: false,
        label: "Naviforce",
        value: "Naviforce",
      },
      {
        checked: false,
        label: "SKMEI 9117",
        value: "SKMEI 9117",
      },
      {
        checked: false,
        label: "Strap Skeleton",
        value: "Strap Skeleton",
      },
      {
        checked: false,
        label: "Stainless",
        value: "Stainless",
      },
      {
        checked: false,
        label: "Eastern Watches",
        value: "Eastern Watches",
      },
      {
        checked: false,
        label: "Luxury Digital",
        value: "Luxury Digital",
      },
      {
        checked: false,
        label: "Watch Pearls",
        value: "Watch Pearls",
      },
      {
        checked: false,
        label: "Bracelet",
        value: "Bracelet",
      },
      {
        checked: false,
        label: "LouisWill",
        value: "LouisWill",
      },
      {
        checked: false,
        label: "Copenhagen Luxe",
        value: "Copenhagen Luxe",
      },
      {
        checked: false,
        label: "Steal Frame",
        value: "Steal Frame",
      },
      {
        checked: false,
        label: "Darojay",
        value: "Darojay",
      },
      {
        checked: false,
        label: "Fashion Jewellery",
        value: "Fashion Jewellery",
      },
      {
        checked: false,
        label: "Cuff Butterfly",
        value: "Cuff Butterfly",
      },
      {
        checked: false,
        label: "Designer Sun Glasses",
        value: "Designer Sun Glasses",
      },
      {
        checked: false,
        label: "mastar watch",
        value: "mastar watch",
      },
      {
        checked: false,
        label: "Car Aux",
        value: "Car Aux",
      },
      {
        checked: false,
        label: "W1209 DC12V",
        value: "W1209 DC12V",
      },
      {
        checked: false,
        label: "TC Reusable",
        value: "TC Reusable",
      },
      {
        checked: false,
        label: "Neon LED Light",
        value: "Neon LED Light",
      },
      {
        checked: false,
        label: "METRO 70cc Motorcycle   MR70",
        value: "METRO 70cc Motorcycle - MR70",
      },
      {
        checked: false,
        label: "BRAVE BULL",
        value: "BRAVE BULL",
      },
      {
        checked: false,
        label: "shock absorber",
        value: "shock absorber",
      },
      {
        checked: false,
        label: "JIEPOLLY",
        value: "JIEPOLLY",
      },
      {
        checked: false,
        label: "Xiangle",
        value: "Xiangle",
      },
      {
        checked: false,
        label: "lightingbrilliance",
        value: "lightingbrilliance",
      },
      {
        checked: false,
        label: "Ifei Home",
        value: "Ifei Home",
      },
      {
        checked: false,
        label: "DADAWU",
        value: "DADAWU",
      },
      {
        checked: false,
        label: "YIOSI",
        value: "YIOSI",
      },
    ],
  },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const products = useSelector(selectAllproducts);
  const [filter, setFilter] = useState({});

  const handleFilter = (e, section, option) => {
    const newFilter = { ...filter, [section.id]: option.value };
    setFilter(newFilter);
    dispatch(fetchProductsByFilterAsync(newFilter));
  };

  const handleSort = (e, option) => {
    const newFilter = { ...filter, _sort: option.sort, _order: option.order };
    setFilter(newFilter);
    dispatch(fetchProductsByFilterAsync(newFilter));
  };

  useEffect(() => {
    dispatch(fetchAllProductsAsync());
  }, [dispatch]);

  return (
    <div>
      <div className="bg-white">
        {/* Mobile filter dialog */}
        <MobileFilter
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
        />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              All products
            </h1>
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95">
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <p
                              onClick={(e) => handleSort(e, option)}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900 "
                                  : "text-gray-500 ",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}>
                              {option.name}
                            </p>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}>
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  onChange={(e) =>
                                    handleFilter(e, section, option)
                                  }
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600">
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
              {/* Product grid */}
              <ProductGrid products={products} />
            </div>
          </section>
        </main>
      </div>
      <Pagination />
    </div>
  );
}

function Pagination() {
  return (
    <>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="/"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Previous
          </a>
          <a
            href="/"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">10</span> of{" "}
              <span className="font-medium">97</span> results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination">
              <a
                href="/"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
              <a
                href="/"
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                1
              </a>
              <a
                href="/"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                2
              </a>
              <a
                href="/"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">
                3
              </a>
              <a
                href="/"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileFilter({ mobileFiltersOpen, setMobileFiltersOpen }) {
  return (
    <>
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileFiltersOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full">
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}>
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-t border-gray-200 px-4 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center">
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 min-w-0 flex-1 text-gray-500">
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

function ProductGrid({ products }) {
  return (
    <div className="lg:col-span-3">
      {
        <div className="bg-white">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products?.map((product) => (
              <Link to="/product-details" key={product.id}>
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <div href={product.title}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.title}
                        </div>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.brand}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      }
    </div>
  );
}
