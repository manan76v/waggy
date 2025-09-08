import React from 'react';

const Categories = () => {
  const categories = [
    {
      icon: 'fluent:food-24-filled',
      title: 'foodies',
      href: '#foodies'
    },
    {
      icon: 'material-symbols:toys-outline',
      title: 'toys',
      href: '#toys'
    },
    {
      icon: 'ph:dog-fill',
      title: 'clothing',
      href: '#clothing'
    }
  ];

  return (
    <section id="company-services" className="padding-large">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 pb-3">
            <div className="section-header">
              <h6 className="text-primary">Categories</h6>
              <h2 className="text-9">All the best for your pet in one place</h2>
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="row">
              {categories.map((category, index) => (
                <div key={index} className="col-md-4">
                  <div className="categories">
                    <a href={category.href} className="categories-item">
                      <iconify-icon className="category-icon" icon={category.icon}></iconify-icon>
                      <h5>{category.title}</h5>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;