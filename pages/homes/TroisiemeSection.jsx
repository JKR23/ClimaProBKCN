import { FaCheckCircle, FaTools, FaShieldAlt, FaUsers } from 'react-icons/fa';

export default function TroisiemeSection() {
   return (
      <section className="py-16 px-6 max-w-7xl mx-auto">
         <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold mb-4">Pourquoi nous choisir ?</h3>
            <p className="text-lg text-gray-600">
               Découvrez les raisons pour lesquelles nos clients nous font confiance pour leurs
               besoins en climatisation, chauffage et ventilation.
            </p>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Raison 1 */}
            <div className="flex items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
               <div className="mr-4 text-blue-600">
                  <FaCheckCircle size={40} />
               </div>
               <div>
                  <h4 className="text-xl font-semibold text-blue-600">
                     Installation professionnelle
                  </h4>
                  <p className="text-gray-600">
                     Nos techniciens certifiés assurent une installation rapide et conforme aux
                     normes pour garantir la performance de vos systèmes.
                  </p>
               </div>
            </div>

            {/* Raison 2 */}
            <div className="flex items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
               <div className="mr-4 text-green-600">
                  <FaTools size={40} />
               </div>
               <div>
                  <h4 className="text-xl font-semibold text-green-600">Réparation rapide</h4>
                  <p className="text-gray-600">
                     En cas de panne, nous intervenons rapidement pour réparer vos équipements et
                     minimiser les désagréments.
                  </p>
               </div>
            </div>

            {/* Raison 3 */}
            <div className="flex items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
               <div className="mr-4 text-yellow-600">
                  <FaShieldAlt size={40} />
               </div>
               <div>
                  <h4 className="text-xl font-semibold text-yellow-600">Entretien préventif</h4>
                  <p className="text-gray-600">
                     Un entretien régulier prolonge la durée de vie de vos équipements et optimise
                     leur efficacité énergétique.
                  </p>
               </div>
            </div>

            {/* Raison 4 */}
            <div className="flex items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
               <div className="mr-4 text-red-600">
                  <FaUsers size={40} />
               </div>
               <div>
                  <h4 className="text-xl font-semibold text-red-600">Service client dédié</h4>
                  <p className="text-gray-600">
                     Notre équipe est à votre écoute pour répondre à toutes vos questions et vous
                     accompagner dans vos projets.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}
