const homelist = (req, res) => {
    res.render('locations-list', {
      title:'Fertilizers- find a crop to spary the Fertilizers',
      pageHeader: {
        title: 'FertilizerShops',
        strapline: 'Fertilizers- find a crop to spary the Fertilizers'
      },
      sidebar: 'FertilizeFind helps you locate the perfect shop for your garden needs. Whether its organic compost, plant food, or soil enhancers, let FertilizeFind point you to the right place for a thriving garden' ,
         locations:[{
           name: 'Sri Sai Fertilizer Shop',
           address: 'Pochampally(V) Regonda(M) Bhupalpllay(D)',
           rating: 4,
           facilities: ['Sedds', 'Fertilizers', 'Pesticides'],
           distance: '100m'
         },{
           name: 'Raja Rajeshwara Fertilizers and Pesticides',
           address: 'Regonda(M) ',
           rating: 3,
           facilities: ['Seeds', 'Fertilizers', 'Pesticides'],
           distance: '200m'
         },{
           name: 'Sri Laxminarasimha Fertilizers and Pesticides',
           address: 'Near Parkal',
           rating: 2,
           facilities: [ 'Fertilizers', 'Pesticides'],
           distance: '250m'
         }]
       });
      };
         /* GET 'Location info' page */
    const locationInfo = (req, res) => {
       res.render('location-info', { title: 'Location info' });
      };
      /* GET 'Add review' page */
      const addReview = (req, res) => {
       res.render('location-review-form', { title: 'Add review' });
      };
      module.exports = {
       homelist,
       locationInfo,
       addReview
      };
 