export function CreatePaymentBanner() {
  return (
    <div className="max-w-xl mx-auto my-8 p-8 bg-white border border-gray-100 rounded-2xl shadow-sm font-sans">
      <h2 className="text-xl font-bold text-gray-900 mb-8">
        What happens next?
      </h2>

      <div className="relative space-y-8">
        <div className="absolute top-4 bottom-4 left-[15px] w-[1px] bg-gray-200 pointer-events-none"></div>

        <div className="relative flex items-start gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-purple-600 bg-white text-purple-600 font-medium text-sm shrink-0 z-10">
            1
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-[15px] leading-tight">
              Create Payment
            </h3>
            <p className="text-gray-500 text-sm mt-1 leading-normal">
              Fill in the details and create a payment request.
            </p>
          </div>
        </div>

        <div className="relative flex items-start gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-purple-600 bg-white text-purple-600 font-medium text-sm shrink-0 z-10">
            2
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-[15px] leading-tight">
              Share Link
            </h3>
            <p className="text-gray-500 text-sm mt-1 leading-normal">
              We'll generate a secure checkout link for you.
            </p>
          </div>
        </div>

        <div className="relative flex items-start gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-purple-600 bg-white text-purple-600 font-medium text-sm shrink-0 z-10">
            3
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-[15px] leading-tight">
              Customer Pays
            </h3>
            <p className="text-gray-500 text-sm mt-1 leading-normal">
              Your customer opens the link and completes payment.
            </p>
          </div>
        </div>

        <div className="relative flex items-start gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-purple-600 bg-white text-purple-600 font-medium text-sm shrink-0 z-10">
            4
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-[15px] leading-tight">
              Get Paid
            </h3>
            <p className="text-gray-500 text-sm mt-1 leading-normal">
              You'll be notified and can track the payment in your dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
