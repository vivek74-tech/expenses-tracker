function UpperLayer() {
  return (
    <div className="p-15 border-b-1">
    {/* grid grid-cols-3 max-w-4xl mx-auto */}
        <div className=" flex items-center justify-center gap-50 ">
          <div>
            Total Income
            <p>₹25,000</p>
          </div>
          <div>
            Total Expense
            <p>₹25,000</p>
          </div>
          <div>
            Balance
            <p>₹25,000</p>
          </div>
        
      </div>

    </div>
  )
}

export default UpperLayer;