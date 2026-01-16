"use client";

import { useState } from "react";
import type { Review } from "@/data/reviews";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const needsTruncation = review.text.length > 280;

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {/* Avatar placeholder */}
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
            {review.author.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="font-medium text-gray-900">{review.author}</div>
            <div className="text-xs text-gray-500">{review.date}</div>
          </div>
        </div>
        {/* Profi.ru badge */}
        <div className="flex items-center gap-1 bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Profi.ru
        </div>
      </div>

      {/* Rating stars */}
      <div className="flex gap-0.5 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= review.rating ? "text-yellow-400" : "text-gray-200"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Review text */}
      <p className="text-gray-600 text-sm flex-grow leading-relaxed">
        {isExpanded || !needsTruncation
          ? review.text
          : `${review.text.substring(0, 280)}...`}
      </p>

      {/* Expand/collapse button */}
      {needsTruncation && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 text-sm font-medium mt-2 hover:text-blue-700 transition-colors text-left"
        >
          {isExpanded ? "Свернуть" : "Читать полностью"}
        </button>
      )}

      {/* Service tag */}
      <div className="mt-3 pt-3 border-t border-gray-100">
        <span className="text-xs text-gray-500 capitalize">{review.service}</span>
      </div>
    </div>
  );
}
