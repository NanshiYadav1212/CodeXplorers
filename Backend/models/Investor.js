import mongoose from 'mongoose';

const investorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  investmentCapacity: { type: Number, required: true },
  riskLevel: { type: String, required: true },
  industryPreferences: { type: [String], required: true },
  name :{ type:String ,required:true},
});

export default mongoose.model('Investor', investorSchema);