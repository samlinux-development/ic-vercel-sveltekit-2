export const idlFactory = ({ IDL }) => {
  const Entry = IDL.Record({ 'desc' : IDL.Text, 'name' : IDL.Text });
  const Error = IDL.Variant({
    'NotAuthorized' : IDL.Null,
    'NoRecord' : IDL.Null,
  });
  const Result_1 = IDL.Variant({ 'ok' : IDL.Null, 'err' : Error });
  const Result = IDL.Variant({ 'ok' : IDL.Opt(Entry), 'err' : Error });
  return IDL.Service({
    'bmi' : IDL.Func([IDL.Float64, IDL.Float64], [IDL.Float64], ['query']),
    'get' : IDL.Func([IDL.Nat], [IDL.Opt(Entry)], ['query']),
    'installer' : IDL.Func([], [Result_1], []),
    'search' : IDL.Func([IDL.Text], [Result], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
