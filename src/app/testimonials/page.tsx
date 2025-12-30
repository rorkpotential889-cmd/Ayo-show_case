'use client';

import { motion } from 'framer-motion';
import { testimonials } from '../../content/testimonials';
import { Card } from '../../components/ui/Card';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function CategoryRating({ label, rating }: { label: string; rating: number }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <StarRating rating={rating} />
        <span className="text-sm font-semibold">{rating}</span>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold">Client Testimonials</h1>
          <p className="text-xl text-muted-foreground">
            See what clients say about working with Ayodev
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="space-y-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card className="p-8 space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {testimonial.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}&apos;s message</h3>
                      {testimonial.project && (
                        <p className="text-sm text-muted-foreground">{testimonial.project}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarRating rating={testimonial.rating} />
                    <span className="text-lg font-bold">{testimonial.rating}</span>
                  </div>
                </div>

                {/* Message */}
                <p className="text-muted-foreground leading-relaxed">{testimonial.message}</p>

                {/* Category Ratings */}
                <div className="space-y-3 pt-4 border-t">
                  <CategoryRating
                    label="Seller communication level"
                    rating={testimonial.categories.communication}
                  />
                  <CategoryRating
                    label="Quality of delivery"
                    rating={testimonial.categories.quality}
                  />
                  <CategoryRating label="Value of delivery" rating={testimonial.categories.value} />
                </div>

                {/* Highlights */}
                {testimonial.highlights && testimonial.highlights.length > 0 && (
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-3">THINGS THAT WENT WELL</h4>
                    <ul className="space-y-2">
                      {testimonial.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {testimonials.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">
              Testimonials will appear here as clients share their feedback.
            </p>
          </Card>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center pt-8"
        >
          <p className="text-muted-foreground mb-6">
            Ready to experience the same quality service?
          </p>
          <a href="/contact">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
